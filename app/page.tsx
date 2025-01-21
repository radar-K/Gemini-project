import Link from "next/link";
import NavBar from "./users/NavBar";

export default function Home() {
  return (
    <main>
    <h1 className="flex justify-center font-bold text-5xl">Hej Hej Projekt Gemini</h1>
    <p className="flex justify-center pt-5">5 förslag till ai generated sidor som var och en av oss kan göra,
      därefter kan vi skriva en inledning här på vad vi har gjort. 
    </p>

    <ul className="block text-center pt-5 d">
        <li> AI-drivet quiz eller spel</li>
        <li>Språköversättning och textanalys</li>
        <li>AI-assisterad chattbot</li>
        <li>AI-driven innehållsgenerering</li>
        <li>Audio understanding?</li>
      </ul>


</main>
  );
}

