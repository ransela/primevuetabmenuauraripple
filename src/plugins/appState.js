import Lara from '@/presets/lara';
import Aura from '@/presets/aura';
import { reactive, watch } from 'vue';

export default {
    install: (app) => {
    const _appState = reactive({ preset: 'lara' });

    watch(
        () => _appState.preset,
        (newValue) => {
        if (newValue === 'lara')
            app.config.globalProperties.$primevue.config.pt = Lara;
        else if (newValue === 'aura')
            app.config.globalProperties.$primevue.config.pt = Aura;
        }
    );

    app.config.globalProperties.$appState = _appState;
    }
};
