const indexTemplate = (paths) => {
  const exportEntries = paths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = formatExportName(basename);
    return `export ${exportName} from './${basename}'\nexport { ${exportName} }`;
  });
  return exportEntries.join("\n");
};

module.exports = {
  multipass: true,
  precision: 2,
  indexTemplate: indexTemplate,
  pretty: true,
  plugins: ["convertStyleToAttrs", "moveElemsAttrsToGroup"],
};
