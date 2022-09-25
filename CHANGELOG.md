# Changelog

## Version 3.0.2

### Features

- Adding peer dependencies to react, and allow version 17 & 18
- Upgrade general dependencies included sigma & graphology
- Set per default the sigma settings `allowInvalidContainer` to `true`
- Better type management for events ( thanks to [#1142](https://github.com/jacomyal/sigma.js/issues/1142) )
- Website with examples with code & preview
- Reset SearchControl when user click on the stage

### Breaking changes

- Settings of forceAtlas2 has changed in the latest version of graphology
- Event `cameraUpdated` has been renamed `updated`
- Property `initialSettings` on component `SigmaContainer` has been renamed `settings`

### Fixes

- Fix touch events - [#28](https://github.com/sim51/react-sigma/pull/28) (thanks to [@grothendeick](https://github.com/grothendeick))
- Fix `autoRunFor` on layout worker when value is set to `0` (ie. no timer)
- Fix CSS for borders issues

## Version 3.0.1

Version 3.0.1 has missing files in npm binaries.

## Version 3.0.0

Version 3.0.0 has been partially published due npm OTP issue.
That's why the version 3.0.1 has been released.

## Version 2.0.2

### Fixes

- Fix repository link in `packages.json`

## Version 2.0.1

- Adding README.md on modules

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
