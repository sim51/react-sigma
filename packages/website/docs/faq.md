# Frequently Asked Questions

## How I can correct the error `Error: Sigma: container has no height.` ?

This error comes from Sigma it self.
To work, Sigma requires that its _div container_ has a height.
Per default in the CSS of this project, _SigmaContainer_ is configured to take 100% (height & width) of its parent.

To resolve this issue, the easiest way is to add an _height_ on the _SigmaContainer_ like that :

```jsx
<SigmaContainer style={{ height: "500px", width: "500px" }}>...</SigmaContainer>
```

## Is it possible to use this project with Next.js ?

This project can be used with Next.js, but only for client rendering, not for server side.
If you encounter the error `ReferenceError: window is not defined`, it's because you try to use react-sigmav2
for server and client side and obviously `window` is not define on service side.

To fix that, you have to check that you are on client side, and then do a dynamic import :

```jsx
const isBrowser = () => typeof window !== "undefined";
if (isBrowser) {
  const SigmaContainer = dynamic(
    import("@react-sigma/core").then((mod) => mod.SigmaContainer),
    { ssr: false },
  );
  const MyGraph = dynamic(
    import("../components/graph").then((mod) => mod.NetworkGraph),
    { ssr: false },
  );
  return (
    <SigmaContainer>
      <MyGraph />
    </SigmaContainer>
  );
} else return <p>NOT AVAILABLE</p>;
```
