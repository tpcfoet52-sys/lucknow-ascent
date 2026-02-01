import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
    children: ReactNode;
    requiredTeam?: string;
}

const ProtectedRoute = ({ children, requiredTeam }: ProtectedRouteProps) => {
    const navigate = useNavigate();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const checkAuth = () => {
            const authData = sessionStorage.getItem("coordinator_auth");

            if (!authData) {
                // Not logged in, redirect to coordinator login
                navigate("/coordinator-login");
                return;
            }

            try {
                const { team, timestamp } = JSON.parse(authData);

                // Check if session is still valid (24 hours)
                const sessionAge = Date.now() - timestamp;
                const maxAge = 24 * 60 * 60 * 1000; // 24 hours

                if (sessionAge > maxAge) {
                    // Session expired
                    sessionStorage.removeItem("coordinator_auth");
                    navigate("/coordinator-login");
                    return;
                }

                // Check if user has required team access
                if (requiredTeam && team !== requiredTeam) {
                    // Wrong team, redirect to their dashboard
                    navigate("/coordinator/dashboard");
                    return;
                }

                // All checks passed
                setIsChecking(false);
            } catch (error) {
                // Invalid auth data
                sessionStorage.removeItem("coordinator_auth");
                navigate("/coordinator-login");
            }
        };

        checkAuth();
    }, [navigate, requiredTeam]);

    if (isChecking) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    return <>{children}</>;
};

export default ProtectedRoute;
