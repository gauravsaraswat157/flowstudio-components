import { FASTElement, customElement, attr } from 'https://cdn.jsdelivr.net/npm/@microsoft/fast-element/dist/fast-element.min.js'

const template = html<NameTag>`
  <div class="header">
    <h3>${x => x.greeting.toUpperCase()}</h3>
    <h4>my name is</h4>
  </div>

  <div class="body">TODO: Name Here</div>

  <div class="footer"></div>
`;

@customElement({
  name: 'name-tag',
  template
})
export class NameTag extends FASTElement {
  @attr greeting: string = 'Hello';
}

