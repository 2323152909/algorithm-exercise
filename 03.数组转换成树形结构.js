function formatCommentTree(comments) {
    // 先获取到根节点评论
    const roots = comments.filter(item => item.commentId === null)

    // 转化为属性结构的函数
    function toTree(comments, commentId) {
        const children = []
        for (let i = 0; i < comments.length; i++) {
            if (comments[i].commentId === commentId) {
                comments[i].children = toTree(comments, comments[i].id)
                children.push(comments[i])
            }
        }

        return children
    }
    // 存储当前得children元素（平铺树形结构后的数组）
    let currentChildren = []

    for (let i = 0; i < roots.length; i++) {
        const id = roots[i].id
        // 获取到树形结构的children
        const children = toTree(comments, id)
        // 将树形结构按第一层平铺
        flat(children)
        // 利用V8引擎处理js文件为单线程，将平铺后的共有属性设为根节点的children
        roots[i].children = currentChildren
        // 将共有属性置空（还要用于下一个根节点的处理）
        currentChildren = []
    }

    // 平铺属性结构的函数
    function flat(nodes) {
        if (!nodes || nodes.length === 0) return [];
        nodes.forEach((node) => {
            currentChildren.push({ ...node });
            return flat(node.children);
        });
    }

    return roots
}

const comments = [
    {
        "id": 0,
        "commentId": null,
    },
    {
        "id": 1,
        "commentId": null,
    },
    {
        "id": 2,
        "commentId": 1,
        "replayName": "student"
    },
    {
        "id": 3,
        "commentId": 2,
        "replayName": "student"
    },
    {
        "id": 4,
        "commentId": 3,
        "replayName": "student"
    },
    {
        "id": 5,
        "commentId": 1,
        "replayName": "student"
    },
    {
        "id": 6,
        "commentId": 2,
        "replayName": "student"
    },
    {
        "id": 8,
        "commentId": 0,
        "replayName": "student"
    },
    {
        "id": 7,
        "commentId": 3,
        "replayName": "student"
    }
]

console.log(formatCommentTree(comments));