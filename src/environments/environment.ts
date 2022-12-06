// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapbox: {
    accessToken: 'pk.eyJ1IjoibGl0dHdhIiwiYSI6ImNreW10a3BlMjEzZGEydnVmZ3p3cnJhancifQ.jXQsRUgfbst-ejn2FfJkIA'
  },
  mapTiler: {
    key: 'https://api.maptiler.com/maps/osm-standard/style.json?key=uifytPY8UI4FOElU6qGm',
    apiKey: 'SoL71Zyf7SmLrVYWC7fQ', // uifytPY8UI4FOElU6qGm
  },
  map: {
    style: 'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=CH1cYDfxBV9ZBu1lHGqh'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
