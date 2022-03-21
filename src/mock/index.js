import Mock, { Random } from 'mockjs'


Mock.mock('api/articles', 'get', () => {
  return {
    status: 200,
    message: '获取文章成功',
    list: Mock.mock({
      'articlesList|7': [
        {
          "id|+1": 1,
          "title": '@ctitle(5, 15)',
          "content": '@cparagraph(500,1000)',
          "time": '@date()',
          "brief": "@csentence(10,15)",
          "author": '@cname()',
          "principal": '@name()',
          "img_url": Random.image('566x377', '#50B347', '#FFF', ' Hello')
        }
      ]
    }),
  }
})


Mock.mock('api/problems', 'get', () => {
  return {
    status: 200,
    message: '获取问题成功',
    list: Mock.mock({
      'problemsList|7': [
        {
          "id|+1": 1,
          "problem": '@ctitle(5, 15)',
          "principal": '@name()',
          "answerList|10-20": [
            {
              "aid|+1": 1,
              "content": '@cparagraph()',
              "name": '@cname()',
            }
          ],
        }
      ]
    }),
  }
})



