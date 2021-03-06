import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                secondary: colors.amber.darken3
            }
        },
        options: {
            customProperties: true
        }
    }
});