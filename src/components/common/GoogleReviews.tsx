import { useEffect } from "react";

export default function GoogleReviews() {
    useEffect(() => {
        const scriptId = "elfsight-script";

        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://apps.elfsight.com/p/platform.js";
            script.defer = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className="elfsight-app-c1543f7ad4bf43c98721f381fddf8cc2"></div>
    );
}
