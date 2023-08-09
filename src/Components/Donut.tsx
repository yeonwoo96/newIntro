import DonutChart from "react-donut-chart";

type Idata = {
  win: number;
  defeat: number;
};

export const Donut = ({ win, defeat }: Idata) => {
  return (
    <DonutChart
      data={[
        {
          label: "none",
          value: defeat,
        },
        {
          label: "skill",
          value: win,
        },
      ]}
      colors={["rgba(255,255,255,0.2)", "#13D8F6"]}
      interactive={false}
      width={75}
      legend={false}
      strokeColor={"none"}
    ></DonutChart>
  );
};
