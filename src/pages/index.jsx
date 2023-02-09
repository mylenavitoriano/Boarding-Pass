import BoardingPass from "@/components/BoardingPass";
import { HomeStyle } from "@/styles/homeStyle";

export default function Home() {
  return (
    <HomeStyle>
      <h1 className="title">Catão de embarque</h1>
      <BoardingPass/>
      <p className="obs">Qualquer problema procure o balcão de atendimento da sua companhia aérea</p>
    </HomeStyle>
  )
}
