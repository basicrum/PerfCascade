/**
 * Creates the html for diagrams legend
 */
export function makeLegend(): HTMLUListElement {
  const ulNode = document.createElement("ul");
  ulNode.className = "resource-legend";

  ulNode.innerHTML = `
        <li class="legend-blocked" title="Time spent in a queue waiting for a network connection.">Blocked</li>
        <li class="legend-dns" title="DNS resolution time.">DNS</li>
        <li class="legend-connect" title="Time required to create TCP connection.">Connect</li>
        <li class="legend-ssl" title="Time required for SSL/TLS negotiation.">SSL (TLS)</li>
        <li class="legend-send" title="Time required to send HTTP request to the server.">Send</li>
        <li class="legend-wait" title="Waiting for a response from the server.">Wait</li>
        <li class="legend-receive"
        title="Time required to read entire response from the server (or cache).">Receive</li>`;
  return ulNode;
}
