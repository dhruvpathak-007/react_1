/* eslint-disable react/prop-types */
function ErrorMessage({ items }) {
  return items.length === 0 ? <h1>I m hungry</h1> : null;
}

export default ErrorMessage;
