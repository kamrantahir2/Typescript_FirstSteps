export type Operation = "multiply" | "add" | "divide";

const calculator = (value1: number, value2: number, op: Operation): number => {
  switch (op) {
    case "multiply":
      return value1 * value2;
    case "divide":
      if (value2 === 0) throw new Error("Can't divide by 0");
      return value1 / value2;
    case "add":
      return value1 + value2;
    default:
      throw new Error("Operation is not multiply, add or divide!");
  }
};

try {
  console.log(calculator(1, 2, "multiply"));
} catch (error: unknown) {
  let errorMessage = "Something went wrong: ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}

export default calculator;
