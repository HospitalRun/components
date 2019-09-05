function generateTitle(name) {
  const title = '`' + name + '` (component)';
  return '# ' + title + '\n';
}

function generateDesciption(description) {
  return description;
}

function generatePropType(type) {
  let value;

  if(type.raw) {
    value = type.raw;
  } else {
    value = type.name;
  }

  return '`' + value + '`';
}

function generatePropDefaultValue(value) {
  return value.value;
}

function generateProp(propName, prop) {
  const required = prop.required ? 'yes' : '-';
  const description = prop.description ? prop.description.replace('\n', ' ') : '';
  const defaultValue = prop.defaultValue ? generatePropDefaultValue(prop.defaultValue) : '';
  const type = prop.tsType ? generatePropType(prop.tsType) : '';

  return '|' + propName + '|' + type + '|' + required + '|' + defaultValue + '|' + description + '|';
}

function generateProps(props) {
  if (!props) return '\n';
  const title = '## Props';

  const tableHeader = '| property | propType | required | default | description |';
  const tableSeparator = '|----------|----------|----------|---------|-------------|';

  return (
    title +
    '\n' +
    tableHeader +
    '\n' +
    tableSeparator +
    '\n' +
    Object.keys(props)
      .sort()
      .map(function(propName) {
        return generateProp(propName, props[propName]);
      })
      .join('\n')
  );
}

function generateMarkdown(name, reactAPI) {
  const markdownString =
    generateTitle(name) +
    '\n' +
    generateDesciption(reactAPI.description) +
    '\n' +
    generateProps(reactAPI.props);

  return markdownString;
}

module.exports = generateMarkdown;