import { Github } from 'styled-icons/boxicons-logos';
import { Search } from 'styled-icons/boxicons-regular';
import { Heart, HeartFill } from 'styled-icons/bootstrap';

export type OptionsKeys = 'github' | 'search' | 'heart' | 'heart-fill';

export interface Options {
  github: React.ReactNode;
  search: React.ReactNode;
  heart: React.ReactNode;
  'heart-fill': React.ReactNode;
}

const options: Options = {
  github: Github,
  search: Search,
  heart: Heart,
  'heart-fill': HeartFill,
};

export default options;
