interface Person {
  name: string;
  city: string;
  state?: string;
}

interface Employee extends Person {
  id: number;
  department: string;
}

type Animal = {
  type: "cat" | "dog" | "bird";
  name: string;
};

console.log("Aniket");
//////// You can copy and past some of the examples in here
