import React, {useState} from "react";

function Comment({comment}) {

  const user = {
    uid: 3009257,
    uname: 'Jonathan',
    avatarUrl: 'https://avatars.githubusercontent.com/u/3009257?v=4'
  }


  const tmpComments = [
    {
      id: 1,
      content: 'this is comment 1',
      user: {
        uid: 3009257,
        name: 'Jonathan',
        avatar: 'https://ui-avatars.com/api/?name='
      },
      gmtCreate: '2020-09-01 12:00:00',
      replyTimes: 23
    },
    {
      id: 2,
      content: 'this is comment 2',
      user: {
        uid: 3009257,
        name: 'ar J',
        avatar: 'https://ui-avatars.com/api/?name='
      },
      gmtCreate: '2020-09-01 12:00:00',
      replyTimes: 43
    }
  ]

  const [comments, setComments] = useState(tmpComments)

  return (
    <div className="commentApp">
      <div className="reply-navigation"></div>
      <div className='reply-warp'>
        <div className='do-comment'></div>
        <div className='reply-list'>

          {comments.map(item => (
            <div className='reply-item' key={item.id}>
              <div className='reply-avatar'>
                <img className='reply-avatar-img' alt='avatar' src={item?.user?.avatar + item?.user?.name}/>
              </div>

              <div className='content-warp'>
                <div className='user-info'>
                  <div className='user-name'>{item?.user?.username}</div>
                </div>
                <div className='root-reply'>
                  <span className='reply-content'>{item.content}</span>
                  <div className='reply-info'>
                    <span className='reply-time'>{item.gmtCreate}</span>
                    <span className='reply-times'>{item.replyTimes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Comment;