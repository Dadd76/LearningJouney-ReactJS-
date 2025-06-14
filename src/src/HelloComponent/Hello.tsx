import React from "react";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

class HelloComp extends React.Component<Props> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}

export default HelloComp;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("*****");
}