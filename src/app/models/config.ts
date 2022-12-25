export interface Config {
  tiles: Array<TileConfig>;
  iframes: Array<IFrameConfig>;
  navLinks: Array<NavLinkConfig>
}

export interface TileConfig {
  title: string;
  description: string;
  color: string;
  iconUrl: string;
}

export interface IFrameConfig {
  src: string;
  height: number;
  width: number;
}

export interface NavLinkConfig {
  label: string;
  link: string;
}
