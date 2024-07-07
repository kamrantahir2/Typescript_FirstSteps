type Operation = "multiply" | "add" | "divide";
interface CalculatorValues {
  value1: number;
  value2: number;
}

const calculator = (values: CalculatorValues, op: Operation): number => {
  switch (op) {
    case "multiply":
      return values.value1 * values.value2;
    case "divide":
      if (values.value2 === 0) throw new Error("Can't divide by 0");
      return values.value1 / values.value2;
    case "add":
      return values.value1 + values.value2;
    default:
      throw new Error("Operation is not multiply, add or divide!");
  }
};

const values: CalculatorValues = { value1: 2, value2: 2 };

try {
  console.log(calculator(values, "multiply"));
} catch (error: unknown) {
  let errorMessage = "Something went wrong: ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
