import { Github } from 'styled-icons/boxicons-logos';
import { Search, LockOpen, Comment } from 'styled-icons/boxicons-regular';
import { Heart, HeartFill, SortDown, SortUp } from 'styled-icons/bootstrap';
import { LockClosed } from 'styled-icons/heroicons-solid';
import { DotCircle } from 'styled-icons/fa-regular';

export type OptionsKeys =
  | 'github'
  | 'search'
  | 'heart'
  | 'heart-fill'
  | 'sort-up'
  | 'sort-down'
  | 'lock-open'
  | 'lock-closed'
  | 'issue-state'
  | 'comment';

export interface Options {
  github: React.ReactNode;
  search: React.ReactNode;
  heart: React.ReactNode;
  'heart-fill': React.ReactNode;
  'sort-up': React.ReactNode;
  'sort-down': React.ReactNode;
  'lock-open': React.ReactNode;
  'lock-closed': React.ReactNode;
  'issue-state': React.ReactNode;
  comment: React.ReactNode;
}

const options: Options = {
  github: Github,
  search: Search,
  heart: Heart,
  'heart-fill': HeartFill,
  'sort-up': SortUp,
  'sort-down': SortDown,
  'lock-open': LockOpen,
  'lock-closed': LockClosed,
  'issue-state': DotCircle,
  comment: Comment,
};

export default options;
