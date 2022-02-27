# Changelog

## Version 2.0.0

### Features

- Rename of the project to `@react-sigma`
- **Project structure :** mono-repo with multiple projects
- Possibility to initialize the `SigmaContainer` with a graph
- Adding all layouts that are available in graphology
- Adding hooks to manage camera, zoom, fullscreen, context. Standard component are using those hooks, so it's easy to rewrite them (if needed)

### Breaking changes

- Sigma React div class name has changed from `react-sigma-v2` to `react-sigma`
- Component `ForceAtlasControl` has been rename `LayoutForceAtlasControl`
- Components of type control don't take anymore properties to customize the DOM button. We use children instead now. For controls with multiple button, the child order is important.

```jsx
<FullScreenControl customEnterFullScreen={<BsArrowsFullscreen />} customExitFullScreen={<BsFullscreenExit />} />
```

Becomes

```jsx
<FullScreenControl>
  <>
    <BsArrowsFullscreen />
    <BsFullscreenExit />
  </>
</FullScreenControl>
```

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```
