import makeId from './makeId';

const preMarkup = `
  # Overview

  Mr. Ringer is a Javascript math library that makes it simple to perform complex math for 3D games.

  This package is named after my high school trigonometry teacher, Mr Ringer, who told myself and the rest of the class to go to the beach instead of taking the final exam (I ended up getting a 46% on that test).

  # Installation

  Install with npm,

  \`\`\`
  $ npm install mr.ringer

  import { Vector2 } from 'mr.ringer';
  \`\`\`

  Or reference standalone,

  \`\`\`
  <script src="https://unpkg.com/mr.ringer/dist/mr.ringer.js"></script>

  const { Vector2 } = window['mr.ringer'];
  \`\`\`
`;

const postMarkup = `
  # Glossary

  ### Vector

  In mathematics, a vector represents a direction and length. For example, a car drives north at 50mph.

  You should think of a vector like a compass and a spedometer forged together into a single contraption.

  The amount of components in a vector depends on its dimensions. For example, a two dimensionsional vector has an X and Y component.

  In game development vectors are used for a variety of purposes such as,

  - Keeping track of velocity
  - Storing a 2D or 3D coordinate
`;

const lines = `${preMarkup}\n${postMarkup}`
  .split('\n')
  .map((line, index) => ({ line: line.trim(), index }));

const sections = lines
  .filter(({ line }) => line.startsWith('# '))
  .map(({ line, index }) => ({
    index,
    id: makeId(line.replace('#', '')),
    title: line.replace('#', '').trim(),
  }));

const content = {
  preMarkup,
  postMarkup,
  sections,
};

export default content;
