angular.module('calm-admin')
  .service('generalDemoData', function(){
    return {
      rooms: [
        {
          id: '',
          name: 'Standard room',
          packs: [
            {
              id: 'st1',
              name: 'Gói tiết kiệm mùa hè'
            },
            {
              id: 'st2',
              name: 'Gói buffet tối'
            },
            {
              id: 'st3',
              name: 'Gói tuần trăng mật'
            },
            {
              id: 'st4',
              name: 'Gói xa xỉ'
            }
          ]
        },
        {
          id: '',
          name: 'Deluxe room',
          packs: [
            {
              id: 'de1',
              name: 'Gói tiết kiệm mùa hè'
            },
            {
              id: 'de1',
              name: 'Gói buffet tối'
            },
            {
              id: 'de1',
              name: 'Gói tuần trăng mật'
            },
            {
              id: 'de1',
              name: 'Gói xa xỉ'
            }
          ]
        },
        {
          id: '',
          name: 'Suite room',
          packs: [
            {
              id: 'su1',
              name: 'Gói tiết kiệm mùa hè'
            },
            {
              id: 'su2',
              name: 'Gói buffet tối'
            },
            {
              id: 'su3',
              name: 'Gói tuần trăng mật'
            },
            {
              id: 'su4',
              name: 'Gói xa xỉ'
            }
          ]
        }
      ],
      extras: [
        {
          id: 'ex1',
          name: 'Bãi biển riêng'
        },
        {
          id: 'ex2',
          name: 'Buffet tối'
        },
        {
          id: 'ex3',
          name: 'Buffet sáng'
        },

      ]
    }
  });
