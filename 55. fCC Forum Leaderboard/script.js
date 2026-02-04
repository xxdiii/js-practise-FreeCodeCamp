const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

const timeAgo=(timeStamp)=>{
    const current=new Date();
    const past=new Date(timeStamp);
    
    const difference=current-past;
    const diffInMin=Math.floor(difference/(1000*60));
    const diffInHr=Math.floor(diffInMin/60);
    const diffInDay=Math.floor(diffInHr/24);
    if(diffInMin<60){
        return `${diffInMin}m ago`;
    }else if(diffInHr<24){
        return `${diffInHr}h ago`
    }else{
        return `${diffInDay}d ago`
    }
}

const viewcount=(noOfViews)=>{
    if(noOfViews>=1000){
        return `${Math.floor(noOfViews/1000)}k`;
    }else{
        return noOfViews;
    }
}

const forumCategory=(idCategory)=>{
    if(idCategory in allCategories){
        const {category, className}=allCategories[idCategory];
        return `<a class="category ${className}" href="https://forum.freecodecamp.org/${className}/${idCategory}">${category}</a>`
    }else{
        return `<a class="category general" href="https://forum.freecodecamp.org/general/${idCategory}">General</a>`
    }
}


const avatars=(posters, users)=>{
    return posters.map((poster)=>{
        const user=users.find((user)=>user.id===poster.user_id);
        const avatar_size=user.avatar_template.replace(/{size}/,30);
        const src=avatar_size.startsWith("/") ? avatarUrl+avatar_size : avatar_size;
        return `<img src="${src}" alt="${user.name}">`
    }).join("");
}


const showLatestPosts = (data) => {
  // 14. Extract users and topic_list (and topics from inside it)
  const { users, topic_list } = data;
  const { topics } = topic_list;

  // 15. Set the innerHTML of the posts-container
  const postsContainer = document.getElementById('posts-container');
  
  postsContainer.innerHTML = topics.map((item) => {
    // 14. Destructure the required properties
    const { 
      id, 
      title, 
      views, 
      posts_count, 
      slug, 
      posters, 
      category_id, 
      bumped_at 
    } = item;

    // 16. Return the constructed table row
    return `
      <tr>
        <td>
          <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
          ${forumCategory(category_id)}
        </td>

        <td>
          <div class="avatar-container">
            ${avatars(posters, users)}
          </div>
        </td>

        <td>${posts_count - 1}</td>

        <td>${views}</td>

        <td>${timeAgo(bumped_at)}</td>
      </tr>`;
  }).join(""); // Join the array into a single string
};

const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
};
