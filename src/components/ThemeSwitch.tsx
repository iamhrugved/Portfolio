import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }

    return (
        <DarkModeSwitch
            style={{ marginRight: "-10rem" }}
            checked={resolvedTheme === "dark"}
            onChange={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
            size={30}
            moonColor='#FF6F61'
            sunColor='#ff5e00'
        />
    );
}