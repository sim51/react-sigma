# Changelog

## Version 5.0.0

### Breaking changes

- CSS has been renamed `style.css`, so you must change `import "@react-sigma/core/lib/style.css";` by `import "@react-sigma/core/lib/react-sigma.min.css";`. Now the rollup config is shared, and for each module that export a css file, it will be named `style.css`.
- `SearchControl` in `core` has been removed. A new module called `graph-search` replace it.

### Features

- Upgrade to the latest stable release of Sigma (ie. `3.0.0`)
- Upgrade all librairies to their latest version
- Adding `minimap` module
- Adding `graph-search` module
- Upgrade all project dependencies
- Review prettier configuration
- Sharing rollup configuration across modules

## Version 4.0.3

- Upgrade to lastest beta of Sigma 3
- Review events definition in `core`, and adding missing Sigma events (like the `resize` one)

## Version 4.0.2

### Fixes

- [65](https://github.com/sim51/react-sigma/issues/65): Sigma: could not find a suitable program for node type "circle"!

## Version 4.0.1

### Fixes

- [#64](https://github.com/sim51/react-sigma/issues/64): fail to import in vite project because of lodash

## Version 4.0.0 (not be used !)

### Features

- Upgrade to sigma v3
- Upgrade all project dependencies
- Refacto project structure
- Replace `example` project by a storybook
- Replace E2E framework by playwright, and run it on the storybook
- Using stories in website example 
- Fully graph typed API (see [#58](https://github.com/sim51/react-sigma/issues/58)). Component & hooks take generic types for node, edge & graph attributs. Exemple for the load graph hook :
```tsx
const loadGraph = useLoadGraph<{label:string, x:number, y:number}, {label:string, size:number}>();
```

### Breaking changes

- React-sigma doesn't depends anymore to lodash.

- The sigma setting `allowInvalidContainer` is no more set per default. You have to pass it to the container (check above). 

- When you register events on edges, we don't set the correspondig settings anymore, like `enableEdgeClickEvents` (see [#49](https://github.com/sim51/react-sigma/issues/49)).

## Version 3.4.2

### Fixes

- [#55](https://github.com/sim51/react-sigma/issues/55) Fix the order in export in package.json (default entry should be the last)

## Version 3.4.1

### Fixes

- [#54](https://github.com/sim51/react-sigma/issues/54) Compatibility with the TS moduleResolution `bundler`

## Version 3.4.0

### Feature

- [#48](https://github.com/sim51/react-sigma/issues/48) Camera state is restored when Sigma.js is recreated

## Version 3.3.0

### Feature

- [#43](https://github.com/sim51/react-sigma/issues/43) Allow giving a different container for fullscreen control
- [#46](https://github.com/sim51/react-sigma/issues/46) Adding `resize`, `beforeRender` & `afterRender` to `useRegisterEvents`

## Version 3.2.0

### Features

- [#42](https://github.com/sim51/react-sigma/issues/42) Be able to customize labels on controls. Example :

```
<ZoomControl labels={{ zoomIn: "PLUS", zoomOut: "MINUS", reset: "RESET" }} />
```

## Version 3.1.0

### Fixes

- [#38](https://github.com/sim51/react-sigma/pull/38) Adding `mousemovebody` to `useRegisterEvents` (thanks [jakobhansen-blai](https://github.com/jakobhansen-blai) !)

### Features

- Upgrade to `sigma@2.4.0`
- Upgrade to `graphology-layout-forceatlas2@0.10.1`
- [#30](https://github.com/sim51/react-sigma/issues/30) : Forward the sigma ref on the `SigmaContainer`

## Version 3.0.3

### Fixes

- Fix remove listeners on `useRegisterEvents` hook.

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
