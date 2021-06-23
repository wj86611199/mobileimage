const list = [
  {
    label: '梅桥镇',
    images: [
      'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%A2%85%E6%A1%A5%E9%95%87/%E5%8D%8E%E5%9C%A9%E6%9D%91%E5%85%9A%E5%91%98%E6%B4%BB%E5%8A%A8%E5%AE%A4%EF%BC%88%E5%86%85%EF%BC%89_9_11zon.jpg',
      'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%A2%85%E6%A1%A5%E9%95%87/%E5%8D%8E%E5%9C%A9%E6%9D%91%E5%85%9A%E5%91%98%E6%B4%BB%E5%8A%A8%E5%AE%A4%EF%BC%88%E5%A4%96%EF%BC%89_10_11zon.jpg',
      'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%A2%85%E6%A1%A5%E9%95%87/%E5%8D%8E%E5%9C%A9%E6%9D%91%E7%90%86%E8%AE%BA%E5%AE%A3%E8%AE%B2%E5%AE%A4%EF%BC%88%E5%A4%96%EF%BC%89_9_11zon.jpg',
      'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%A2%85%E6%A1%A5%E9%95%87/%E5%8D%8E%E5%9C%A9%E6%9D%91%E7%90%86%E8%AE%BA%E5%AE%A3%E8%AE%B2%EF%BC%88%E5%86%85%EF%BC%89_8_11zon.jpg'
    ]
  },
  {
    label: '沫河口镇'
  },
  {
    label: '曹老集镇',
    children: [
      {
        label: '曹郢村',
        images: [
          'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87/%E6%9B%B9%E9%83%A2%E6%9D%91/%E8%9A%8C%E5%9F%A0%E5%B8%82%E6%B7%AE%E4%B8%8A%E5%8C%BA%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87%E6%9B%B9%E9%83%A2%E6%9D%91%E6%96%B0%E6%97%B6%E4%BB%A3%E6%96%87%E6%98%8E%E5%AE%9E%E8%B7%B5%E5%B9%BF%E5%9C%BA-min.jpg',
          'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87/%E6%9B%B9%E9%83%A2%E6%9D%91/%E8%9A%8C%E5%9F%A0%E5%B8%82%E6%B7%AE%E4%B8%8A%E5%8C%BA%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87%E6%9B%B9%E9%83%A2%E6%9D%91%E6%96%B0%E6%97%B6%E4%BB%A3%E6%96%87%E6%98%8E%E5%AE%9E%E8%B7%B5%E7%AB%99%E5%B9%BF%E5%9C%BA1-min.jpg',
          'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87/%E6%9B%B9%E9%83%A2%E6%9D%91/%E8%9A%8C%E5%9F%A0%E5%B8%82%E6%B7%AE%E4%B8%8A%E5%8C%BA%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87%E6%9B%B9%E9%83%A2%E6%9D%91%E6%96%B0%E6%97%B6%E4%BB%A3%E6%96%87%E6%98%8E%E5%AE%9E%E8%B7%B5%E7%AB%99%E5%B9%BF%E5%9C%BA-min.jpg',
          'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87/%E6%9B%B9%E9%83%A2%E6%9D%91/%E8%9A%8C%E5%9F%A0%E5%B8%82%E6%B7%AE%E4%B8%8A%E5%8C%BA%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87%E6%9B%B9%E9%83%A2%E6%9D%91%E6%96%B0%E6%97%B6%E4%BB%A3%E6%96%87%E6%98%8E%E5%AE%9E%E8%B7%B5%E7%AB%99%E5%B9%BF%E5%9C%BA1-min.jpg',
          'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87/%E6%9B%B9%E9%83%A2%E6%9D%91/%E8%9A%8C%E5%9F%A0%E5%B8%82%E6%B7%AE%E4%B8%8A%E5%8C%BA%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87%E6%9B%B9%E9%83%A2%E6%9D%91%E6%96%B0%E6%97%B6%E4%BB%A3%E6%96%87%E6%98%8E%E5%AE%9E%E8%B7%B5%E7%AB%99%E7%89%8C%E5%AD%90-min.jpg',
          'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87/%E6%9B%B9%E9%83%A2%E6%9D%91/%E8%9A%8C%E5%9F%A0%E5%B8%82%E6%B7%AE%E4%B8%8A%E5%8C%BA%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87%E6%9B%B9%E9%83%A2%E6%9D%91%E6%B4%BB%E5%8A%A8%E5%AE%A4-min.jpg'
        ]
      },
      {
        label: '杜陈村',
        images: [
          'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87/%E6%9D%9C%E9%99%88%E6%9D%91/%E8%9A%8C%E5%9F%A0%E5%B8%82%E6%B7%AE%E4%B8%8A%E5%8C%BA%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87%E6%9D%9C%E9%99%88%E6%9D%91-%E5%B9%BF%E5%9C%BA-min.jpg',
          'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87/%E6%9D%9C%E9%99%88%E6%9D%91/%E8%9A%8C%E5%9F%A0%E5%B8%82%E6%B7%AE%E4%B8%8A%E5%8C%BA%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87%E6%9D%9C%E9%99%88%E6%9D%91-%E6%B4%BB%E5%8A%A8%E5%AE%A42-min.jpg',
          'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87/%E6%9D%9C%E9%99%88%E6%9D%91/%E8%9A%8C%E5%9F%A0%E5%B8%82%E6%B7%AE%E4%B8%8A%E5%8C%BA%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87%E6%9D%9C%E9%99%88%E6%9D%91-%E6%B4%BB%E5%8A%A8%E5%AE%A43-min.jpg',
          'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87/%E6%9D%9C%E9%99%88%E6%9D%91/%E8%9A%8C%E5%9F%A0%E5%B8%82%E6%B7%AE%E4%B8%8A%E5%8C%BA%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87%E6%9D%9C%E9%99%88%E6%9D%91-%E6%B4%BB%E5%8A%A8%E5%AE%A44-min.jpg'
        ]
      },
      {
        label: '淝光村',
        images: [
          'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87/%E6%B7%9D%E5%85%89%E6%9D%91/%E8%9A%8C%E5%9F%A0%E5%B8%82%E6%B7%AE%E4%B8%8A%E5%8C%BA%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87%E6%B7%9D%E5%85%89%E6%9D%91-%E5%81%A5%E8%BA%AB%E5%99%A8%E6%9D%90%20%282%29-min.jpg',
          'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87/%E6%B7%9D%E5%85%89%E6%9D%91/%E8%9A%8C%E5%9F%A0%E5%B8%82%E6%B7%AE%E4%B8%8A%E5%8C%BA%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87%E6%B7%9D%E5%85%89%E6%9D%91-%E5%81%A5%E8%BA%AB%E5%99%A8%E6%9D%90-min.jpg', 'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87/%E6%B7%9D%E5%85%89%E6%9D%91/%E8%9A%8C%E5%9F%A0%E5%B8%82%E6%B7%AE%E4%B8%8A%E5%8C%BA%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87%E6%B7%9D%E5%85%89%E6%9D%91-%E5%9B%BE%E4%B9%A6%E5%AE%A4-min.jpg',
          'https://bb-hs-country-1253748961.cos.ap-nanjing.myqcloud.com/%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87/%E6%B7%9D%E5%85%89%E6%9D%91/%E8%9A%8C%E5%9F%A0%E5%B8%82%E6%B7%AE%E4%B8%8A%E5%8C%BA%E6%9B%B9%E8%80%81%E9%9B%86%E9%95%87%E6%B7%9D%E5%85%89%E6%9D%91-%E5%A4%A7%E9%97%A8-min.jpg'
        ]
      },
      { label: '淝河村' },
      { label: '高吴村' },
      { label: '荷花园村' },
      { label: '金山湖村' },
      { label: '路东社区' },
      { label: '路西社区' },
      { label: '南郢村' },
      { label: '清河村' },
      { label: '杨湖村' },
      { label: '镇' },
      { label: '周集村' },
      { label: '周台村' },
      { label: '周郢村' }
    ]
  },
  {
    label: '淮滨街道',
    children: [
      { label: '淮滨街道' }
    ]
  },

  {
    label: '吴小街镇',
    children: [
      {
        label: '槐花园社区'
      },
      {
        label: '太平岗村'
      },
      {
        label: '通成社区'
      },
      {
        label: '吴大台村'
      },
      {
        label: '吴小街村'
      },
      {
        label: '吴小街镇-九台村'
      },
      {
        label: '西门渡村'
      },
      {
        label: '星河社区'
      },
      {
        label: '镇'
      }
    ]
  },
  {
    label: '小蚌埠镇',
    children: [
      {
        label: '东赵村'
      },
      {
        label: '桂花园社区'
      },
      {
        label: '果园社区果园社区'
      },
      {
        label: '荷花园社区'
      },
      {
        label: '卢台村'
      },
      {
        label: '山香村'
      },
      {
        label: '双墩村'
      },
      {
        label: '桃花园社区'
      },
      {
        label: '王小沟村'
      },
      {
        label: '吴郢村'
      },
      {
        label: '小蚌埠社区'
      },
      {
        label: '徐岗村'
      },
      {
        label: '镇'
      }
    ]
  }
]
export default list
