import {
  LogoYoutube,
  FilmOutline,
  HelpBuoySharp,
  CloudySharp,
  ColorPalette,
  DiceSharp,
} from "@vicons/ionicons5";
import { Component } from "vue";

const icon_arr: Component[] = [
  LogoYoutube,
  FilmOutline,
  HelpBuoySharp,
  CloudySharp,
  ColorPalette,
  DiceSharp,
];

const color_arr: string[] = [
  "#8cc540",
  "#019fde",
  "#887ddd",
  "#ff5675",
  "#ff8345",
  "#f8bd0b",
];

function get_icon(): Component {
  return icon_arr[Math.floor(Math.random() * icon_arr.length)];
}

function get_color(): string {
  return color_arr[Math.floor(Math.random() * color_arr.length)];
}

export { get_icon, get_color };
