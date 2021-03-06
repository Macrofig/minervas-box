import can from 'can';
import 'can/view/stache/stache';
import template from './city-detail.stache!';
import viewmodel from './city-detail.viewmodel';
import './city-detail.less!';

import 'components/map/map';
import 'components/art-list/art-list';
import 'components/tabs/tabs';
import 'bit-data-suite/bit-search/';
import 'components/city-details/';


can.Component.extend({
    tag: 'mp-city-detail',
    template: template,
    scope: viewmodel,
    events: {
        inserted: function () {
            var vm = this.viewModel,
                params = {
                    city: can.route.attr('city'),
                    state: can.route.attr('state')
                },
                def = vm.City.findOne(params);
            def.then(function (resp) {
                vm.attr('city', resp);
                vm.attr('artParams').attr('cityId', resp.id);
            });
        }
    }
});
