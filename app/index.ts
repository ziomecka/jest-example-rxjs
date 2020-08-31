import { of } from "rxjs";

export const someFn = () => {
  return of(Promise.resolve);
};

export const subscribe = () => {
  someFn().subscribe(() => {
    console.log("subscribed");
  });
};
