import React from "react";
import * as d3 from "d3";

export default function About() {
  return (
    <div className="page">
      <head>
        <title>Hello👋</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <Unko />
    </div>
  );
}

    function drag(
      simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>,
    ) {
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }


function Unko() {
  const ref: React.RefObject<Element> = React.useRef(null);

  React.useEffect(() => {
    const container = ref.current;
    if (container) {
      const width = 800;
      const height = 600;

      const svg = d3.select(container);
      svg.attr('viewBox', `0 0 ${width} ${height}`);

      const links = data.links.map((d: Record<string, unknown>) =>
        Object.create(d)
      );
      const nodes = data.nodes.map((d: Record<string, unknown>) =>
        Object.create(d)
      );

      const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id((d) => d.id))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2));

      const link = svg.append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke-width", (d) => Math.sqrt(d.value));

      const node = svg.append("g")
        .selectAll("text")
        .data(nodes)
        .join("text")
        .text("💩")
        .attr("text-anchor", "middle")
        .call(drag(simulation));

      simulation.on("tick", () => {
        link
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);

        node
          .attr("x", (d) => d.x)
          .attr("y", (d) => d.y);
      });
    }
  });

  return (<svg ref={ref}></svg>);
}

const data = {
  "nodes": [
    { "id": "A", "group": 1 },
    { "id": "B", "group": 1 },
    { "id": "C", "group": 1 },
    { "id": "D", "group": 1 },
    { "id": "E", "group": 1 },
    { "id": "F", "group": 1 },
    { "id": "G", "group": 1 },
    { "id": "H", "group": 1 },
    { "id": "I", "group": 1 },
    { "id": "J", "group": 1 },
    { "id": "K", "group": 2 },
    { "id": "L", "group": 2 },
    { "id": "M", "group": 3 },
    { "id": "N", "group": 2 },
    { "id": "O", "group": 2 },
    { "id": "P", "group": 2 },
    { "id": "Q", "group": 3 },
    { "id": "R", "group": 3 },
    { "id": "S", "group": 3 },
    { "id": "T", "group": 3 },
    { "id": "U", "group": 3 },
    { "id": "V", "group": 3 },
    { "id": "W", "group": 3 },
    { "id": "X", "group": 3 },
    { "id": "Y", "group": 4 },
    { "id": "Z", "group": 4 },
    { "id": "AA", "group": 5 },
    { "id": "AB", "group": 4 },
    { "id": "AA", "group": 0 },
    { "id": "AC", "group": 2 },
    { "id": "AD", "group": 3 },
    { "id": "AE", "group": 2 },
    { "id": "AF", "group": 2 },
    { "id": "AG", "group": 2 },
    { "id": "AH", "group": 2 },
    { "id": "AI", "group": 2 },
    { "id": "AJ", "group": 2 },
    { "id": "AK", "group": 2 },
    { "id": "AL", "group": 2 },
    { "id": "AM", "group": 4 },
    { "id": "AN", "group": 6 },
    { "id": "AO", "group": 4 },
    { "id": "AP", "group": 4 },
    { "id": "AQ", "group": 5 },
    { "id": "AR", "group": 0 },
    { "id": "AS", "group": 0 },
    { "id": "AT", "group": 7 },
    { "id": "AU", "group": 7 },
    { "id": "AV", "group": 8 },
    { "id": "AW", "group": 5 },
    { "id": "AX", "group": 5 },
    { "id": "AY", "group": 5 },
    { "id": "AZ", "group": 5 },
    { "id": "BA", "group": 5 },
    { "id": "BB", "group": 5 },
    { "id": "BC", "group": 8 },
    { "id": "BD", "group": 5 },
    { "id": "BE", "group": 8 },
    { "id": "BF", "group": 8 },
    { "id": "BG", "group": 8 },
    { "id": "BH", "group": 8 },
    { "id": "BI", "group": 8 },
    { "id": "BJ", "group": 8 },
    { "id": "BK", "group": 8 },
    { "id": "BL", "group": 8 },
    { "id": "BM", "group": 8 },
    { "id": "BN", "group": 8 },
    { "id": "BO", "group": 9 },
    { "id": "BP", "group": 4 },
    { "id": "BQ", "group": 4 },
    { "id": "BR", "group": 4 },
    { "id": "BS", "group": 4 },
    { "id": "BT", "group": 5 },
    { "id": "BU", "group": 10 },
    { "id": "BV", "group": 10 },
    { "id": "BW", "group": 4 },
    { "id": "BX", "group": 8 },
  ],
  "links": [
    { "source": "B", "target": "A", "value": 1 },
    { "source": "C", "target": "A", "value": 8 },
    { "source": "D", "target": "A", "value": 10 },
    { "source": "D", "target": "C", "value": 6 },
    { "source": "E", "target": "A", "value": 1 },
    { "source": "F", "target": "A", "value": 1 },
    { "source": "G", "target": "A", "value": 1 },
    { "source": "H", "target": "A", "value": 1 },
    { "source": "I", "target": "A", "value": 2 },
    { "source": "J", "target": "A", "value": 1 },
    { "source": "L", "target": "K", "value": 1 },
    { "source": "L", "target": "D", "value": 3 },
    { "source": "L", "target": "C", "value": 3 },
    { "source": "L", "target": "A", "value": 5 },
    { "source": "M", "target": "L", "value": 1 },
    { "source": "N", "target": "L", "value": 1 },
    { "source": "O", "target": "L", "value": 1 },
    { "source": "P", "target": "L", "value": 1 },
    { "source": "R", "target": "Q", "value": 4 },
    { "source": "S", "target": "Q", "value": 4 },
    { "source": "S", "target": "R", "value": 4 },
    { "source": "T", "target": "Q", "value": 4 },
    { "source": "T", "target": "R", "value": 4 },
    { "source": "T", "target": "S", "value": 4 },
    { "source": "U", "target": "Q", "value": 3 },
    { "source": "U", "target": "R", "value": 3 },
    { "source": "U", "target": "S", "value": 3 },
    { "source": "U", "target": "T", "value": 4 },
    { "source": "V", "target": "Q", "value": 3 },
    { "source": "V", "target": "R", "value": 3 },
    { "source": "V", "target": "S", "value": 3 },
    { "source": "V", "target": "T", "value": 3 },
    { "source": "V", "target": "U", "value": 5 },
    { "source": "W", "target": "Q", "value": 3 },
    { "source": "W", "target": "R", "value": 3 },
    { "source": "W", "target": "S", "value": 3 },
    { "source": "W", "target": "T", "value": 3 },
    { "source": "W", "target": "U", "value": 4 },
    { "source": "W", "target": "V", "value": 4 },
    { "source": "X", "target": "Q", "value": 3 },
    { "source": "X", "target": "R", "value": 3 },
    { "source": "X", "target": "S", "value": 3 },
    { "source": "X", "target": "T", "value": 3 },
    { "source": "X", "target": "U", "value": 4 },
    { "source": "X", "target": "V", "value": 4 },
    { "source": "X", "target": "W", "value": 4 },
    { "source": "X", "target": "M", "value": 2 },
    { "source": "X", "target": "L", "value": 9 },
    { "source": "Y", "target": "X", "value": 2 },
    { "source": "Y", "target": "L", "value": 7 },
    { "source": "Z", "target": "Y", "value": 13 },
    { "source": "Z", "target": "X", "value": 1 },
    { "source": "Z", "target": "L", "value": 12 },
    { "source": "AA", "target": "Y", "value": 4 },
    { "source": "AA", "target": "L", "value": 31 },
    { "source": "AA", "target": "Q", "value": 1 },
    { "source": "AA", "target": "Z", "value": 1 },
    { "source": "AB", "target": "L", "value": 17 },
    { "source": "AB", "target": "X", "value": 5 },
    { "source": "AB", "target": "Z", "value": 5 },
    { "source": "AB", "target": "Y", "value": 1 },
    { "source": "AB", "target": "AA", "value": 1 },
    { "source": "AA", "target": "L", "value": 8 },
    { "source": "AA", "target": "AB", "value": 1 },
    { "source": "AC", "target": "X", "value": 1 },
    { "source": "AC", "target": "AB", "value": 1 },
    { "source": "AC", "target": "L", "value": 2 },
    { "source": "AD", "target": "X", "value": 1 },
    { "source": "AE", "target": "AD", "value": 2 },
    { "source": "AE", "target": "L", "value": 3 },
    { "source": "AE", "target": "X", "value": 2 },
    { "source": "AE", "target": "AB", "value": 1 },
    { "source": "AF", "target": "L", "value": 1 },
    { "source": "AG", "target": "L", "value": 2 },
    { "source": "AG", "target": "AB", "value": 1 },
    { "source": "AH", "target": "L", "value": 3 },
    { "source": "AH", "target": "AC", "value": 2 },
    { "source": "AI", "target": "L", "value": 3 },
    { "source": "AI", "target": "AH", "value": 3 },
    { "source": "AI", "target": "AC", "value": 2 },
    { "source": "AJ", "target": "AH", "value": 2 },
    { "source": "AJ", "target": "AI", "value": 2 },
    { "source": "AJ", "target": "L", "value": 2 },
    { "source": "AJ", "target": "AC", "value": 1 },
    { "source": "AK", "target": "AH", "value": 2 },
    { "source": "AK", "target": "AI", "value": 2 },
    { "source": "AK", "target": "AJ", "value": 2 },
    { "source": "AK", "target": "L", "value": 2 },
    { "source": "AK", "target": "AC", "value": 1 },
    { "source": "AL", "target": "AH", "value": 2 },
    { "source": "AL", "target": "AI", "value": 2 },
    { "source": "AL", "target": "AJ", "value": 2 },
    { "source": "AL", "target": "AK", "value": 2 },
    { "source": "AL", "target": "L", "value": 2 },
    { "source": "AL", "target": "AC", "value": 1 },
    { "source": "AM", "target": "Z", "value": 1 },
    { "source": "AN", "target": "Z", "value": 1 },
    { "source": "AO", "target": "Y", "value": 2 },
    { "source": "AO", "target": "Z", "value": 3 },
    { "source": "AP", "target": "AO", "value": 2 },
    { "source": "AP", "target": "Z", "value": 2 },
    { "source": "AP", "target": "Y", "value": 1 },
    { "source": "AQ", "target": "L", "value": 3 },
    { "source": "AQ", "target": "AA", "value": 1 },
    { "source": "AQ", "target": "AB", "value": 1 },
    { "source": "AR", "target": "AA", "value": 3 },
    { "source": "AR", "target": "L", "value": 1 },
    { "source": "AS", "target": "AA", "value": 2 },
    { "source": "AU", "target": "AT", "value": 1 },
    { "source": "AV", "target": "AU", "value": 2 },
    { "source": "AV", "target": "Z", "value": 1 },
    { "source": "AV", "target": "AB", "value": 1 },
    { "source": "AV", "target": "L", "value": 1 },
    { "source": "AW", "target": "AA", "value": 3 },
    { "source": "AW", "target": "L", "value": 2 },
    { "source": "AX", "target": "AW", "value": 1 },
    { "source": "AX", "target": "Y", "value": 1 },
    { "source": "AY", "target": "AW", "value": 9 },
    { "source": "AY", "target": "AA", "value": 2 },
    { "source": "AY", "target": "L", "value": 2 },
    { "source": "AZ", "target": "AY", "value": 1 },
    { "source": "AZ", "target": "AM", "value": 1 },
    { "source": "BA", "target": "AY", "value": 1 },
    { "source": "BB", "target": "AY", "value": 2 },
    { "source": "BB", "target": "AW", "value": 1 },
    { "source": "BB", "target": "AA", "value": 1 },
    { "source": "BC", "target": "AY", "value": 6 },
    { "source": "BC", "target": "AW", "value": 12 },
    { "source": "BC", "target": "AM", "value": 1 },
    { "source": "BC", "target": "BB", "value": 1 },
    { "source": "BC", "target": "AA", "value": 21 },
    { "source": "BC", "target": "L", "value": 19 },
    { "source": "BC", "target": "Q", "value": 1 },
    { "source": "BC", "target": "Z", "value": 2 },
    { "source": "BC", "target": "AO", "value": 5 },
    { "source": "BC", "target": "AV", "value": 4 },
    { "source": "BD", "target": "AW", "value": 1 },
    { "source": "BD", "target": "BC", "value": 1 },
    { "source": "BE", "target": "BC", "value": 1 },
    { "source": "BE", "target": "AO", "value": 1 },
    { "source": "BE", "target": "AV", "value": 1 },
    { "source": "BF", "target": "BC", "value": 7 },
    { "source": "BF", "target": "AV", "value": 7 },
    { "source": "BF", "target": "AB", "value": 6 },
    { "source": "BF", "target": "BE", "value": 1 },
    { "source": "BF", "target": "L", "value": 4 },
    { "source": "BG", "target": "BF", "value": 15 },
    { "source": "BG", "target": "BC", "value": 5 },
    { "source": "BG", "target": "AV", "value": 6 },
    { "source": "BG", "target": "BE", "value": 2 },
    { "source": "BH", "target": "AV", "value": 1 },
    { "source": "BH", "target": "BF", "value": 4 },
    { "source": "BH", "target": "BG", "value": 2 },
    { "source": "BI", "target": "AV", "value": 2 },
    { "source": "BI", "target": "BF", "value": 6 },
    { "source": "BI", "target": "BH", "value": 2 },
    { "source": "BI", "target": "BG", "value": 5 },
    { "source": "BI", "target": "BE", "value": 1 },
    { "source": "BI", "target": "BC", "value": 1 },
    { "source": "BJ", "target": "BC", "value": 9 },
    { "source": "BJ", "target": "BF", "value": 17 },
    { "source": "BJ", "target": "BG", "value": 13 },
    { "source": "BJ", "target": "AV", "value": 7 },
    { "source": "BJ", "target": "BE", "value": 2 },
    { "source": "BJ", "target": "AO", "value": 1 },
    { "source": "BJ", "target": "BI", "value": 6 },
    { "source": "BJ", "target": "BH", "value": 3 },
    { "source": "BK", "target": "BG", "value": 5 },
    { "source": "BK", "target": "AV", "value": 5 },
    { "source": "BK", "target": "BJ", "value": 6 },
    { "source": "BK", "target": "BE", "value": 2 },
    { "source": "BK", "target": "BF", "value": 4 },
    { "source": "BK", "target": "BI", "value": 3 },
    { "source": "BK", "target": "BH", "value": 2 },
    { "source": "BK", "target": "BC", "value": 1 },
    { "source": "BL", "target": "BC", "value": 5 },
    { "source": "BL", "target": "BJ", "value": 12 },
    { "source": "BL", "target": "AV", "value": 5 },
    { "source": "BL", "target": "BK", "value": 4 },
    { "source": "BL", "target": "BF", "value": 10 },
    { "source": "BL", "target": "BI", "value": 6 },
    { "source": "BL", "target": "BH", "value": 2 },
    { "source": "BL", "target": "BG", "value": 9 },
    { "source": "BL", "target": "BE", "value": 1 },
    { "source": "BL", "target": "L", "value": 1 },
    { "source": "BM", "target": "BK", "value": 5 },
    { "source": "BM", "target": "BL", "value": 7 },
    { "source": "BM", "target": "AV", "value": 3 },
    { "source": "BM", "target": "BJ", "value": 5 },
    { "source": "BM", "target": "BF", "value": 5 },
    { "source": "BM", "target": "BI", "value": 5 },
    { "source": "BM", "target": "BH", "value": 2 },
    { "source": "BM", "target": "BG", "value": 5 },
    { "source": "BM", "target": "BE", "value": 1 },
    { "source": "BM", "target": "BC", "value": 2 },
    { "source": "BN", "target": "BL", "value": 3 },
    { "source": "BN", "target": "BF", "value": 3 },
    { "source": "BN", "target": "BG", "value": 1 },
    { "source": "BN", "target": "BJ", "value": 2 },
    { "source": "BN", "target": "BM", "value": 2 },
    { "source": "BN", "target": "AV", "value": 1 },
    { "source": "BN", "target": "BK", "value": 1 },
    { "source": "BN", "target": "BI", "value": 1 },
    { "source": "BN", "target": "BH", "value": 1 },
    { "source": "BO", "target": "BE", "value": 3 },
    { "source": "BP", "target": "Z", "value": 5 },
    { "source": "BP", "target": "L", "value": 1 },
    { "source": "BP", "target": "Y", "value": 1 },
    { "source": "BP", "target": "AB", "value": 1 },
    { "source": "BP", "target": "AV", "value": 1 },
    { "source": "BP", "target": "AO", "value": 1 },
    { "source": "BQ", "target": "Z", "value": 6 },
    { "source": "BQ", "target": "BP", "value": 6 },
    { "source": "BQ", "target": "L", "value": 1 },
    { "source": "BQ", "target": "Y", "value": 1 },
    { "source": "BQ", "target": "AB", "value": 2 },
    { "source": "BQ", "target": "AV", "value": 1 },
    { "source": "BQ", "target": "AO", "value": 1 },
    { "source": "BR", "target": "Z", "value": 4 },
    { "source": "BR", "target": "BQ", "value": 4 },
    { "source": "BR", "target": "BP", "value": 4 },
    { "source": "BR", "target": "L", "value": 1 },
    { "source": "BR", "target": "Y", "value": 1 },
    { "source": "BR", "target": "AB", "value": 1 },
    { "source": "BR", "target": "AO", "value": 1 },
    { "source": "BR", "target": "BF", "value": 1 },
    { "source": "BS", "target": "AB", "value": 1 },
    { "source": "BS", "target": "BQ", "value": 2 },
    { "source": "BS", "target": "BP", "value": 2 },
    { "source": "BS", "target": "BR", "value": 2 },
    { "source": "BS", "target": "L", "value": 1 },
    { "source": "BS", "target": "AV", "value": 1 },
    { "source": "BS", "target": "AO", "value": 1 },
    { "source": "BS", "target": "Z", "value": 1 },
    { "source": "BT", "target": "AA", "value": 2 },
    { "source": "BT", "target": "AB", "value": 1 },
    { "source": "BT", "target": "L", "value": 1 },
    { "source": "BU", "target": "AV", "value": 2 },
    { "source": "BV", "target": "AV", "value": 2 },
    { "source": "BV", "target": "BU", "value": 3 },
    { "source": "BW", "target": "BQ", "value": 3 },
    { "source": "BW", "target": "BP", "value": 3 },
    { "source": "BW", "target": "Z", "value": 3 },
    { "source": "BW", "target": "AV", "value": 1 },
    { "source": "BW", "target": "AO", "value": 1 },
    { "source": "BW", "target": "BR", "value": 1 },
    { "source": "BW", "target": "BS", "value": 1 },
    { "source": "BX", "target": "BL", "value": 1 },
    { "source": "BX", "target": "BM", "value": 1 },
    { "source": "BX", "target": "BN", "value": 1 },
    { "source": "BX", "target": "BK", "value": 1 },
    { "source": "BX", "target": "BJ", "value": 1 },
    { "source": "BX", "target": "AV", "value": 1 },
    { "source": "BX", "target": "BF", "value": 1 },
  ],
};
