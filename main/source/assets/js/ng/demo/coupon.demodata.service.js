angular.module('calm-admin')
  .service('couponDemoData', function(){
    return {
      couponType: [
        {
          val: 'Giảm toàn bộ',
          text: 'Giảm toàn bộ'
        },
        {
          val: 'Gói phòng',
          text: 'Gói phòng'
        },
        {
          val: 'Gói tiện ích',
          text: 'Gói tiện ích'
        }
      ],
      couponCreateFm: {
        couponID: '',
        name: '',
        codeText: '',
        codeNum: {
          from: '',
          to: ''
        },
        type: 'Giảm toàn bộ',
        percent: 0,
        start: '',
        end: '',
        applyType: '',
        applyToRooms: [{val: ''}],
        applyToExtras: [{val: ''}],
        created: '',
        usedCode: []
      },
      sampleCoupon: {
        couponID: 'cp1',
        name: 'Coupon khai trương',
        codeText: 'CSK',
        codeNum: {
          from: '100',
          to: '222'
        },
        type: 'Giảm toàn bộ',
        percent: 30,
        start: '20-06-2015',
        end: '08-07-2015',
        applyToRooms: [{val: ''}],
        applyToExtras: [{val: ''}],
        usedCode: []
      },
      usageSample: {
        coupon: {
          couponID: '',
          name: '',
          codeText: '',
          codeNum: ''
        },
        useDate: '',
        offPrice: 0,
        bookInfo: {
          room: '',
          pack: '',
          total: 0,
          checkin: '',
          checkout: '',
          customer: {
            lastName: '',
            fullName: '',
            phoneNum: '',
            bookFor: ''
          },
          beforePrice: 0,
          afterPrice: 0
        }
      },
      couponUsages: [
        {
          coupon: {
            couponID: '',
            name: '',
            codeText: '',
            codeNum: ''
          },
          useDate: '',
          offPrice: 0,
          bookInfo: {
            room: '',
            pack: '',
            total: 0,
            checkin: '',
            checkout: '',
            customer: {
              lastName: '',
              fullName: '',
              phoneNum: '',
              bookFor: ''
            }
          }
        }
      ]
    };
  });
