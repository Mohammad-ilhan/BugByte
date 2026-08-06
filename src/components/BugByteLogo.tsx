import { useTheme } from "@/hooks/use-theme";
import logoDark from "@/assets/lanyard/zenyx-logo.png";
import logoLight from "@/assets/lanyard/zenyx-logo-light.png";

// BugByte brand mark — swaps with the active theme
const BugByteLogo = () => {
  const { theme } = useTheme();
  return (
    <img
      src={theme === "water" ? logoLight : logoDark}
      alt="BugByte logo"
      width={32}
      height={32}
      className="h-8 w-8 object-contain rounded-md"
    />
  );
};

export default BugByteLogo;
