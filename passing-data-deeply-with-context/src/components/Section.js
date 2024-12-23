import { LevelContext } from "./LevelContext";
import { useContext } from "react";

export default function Section({ children }) {
  const level = useContext(LevelContext);
  console.log("Section level", level);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
