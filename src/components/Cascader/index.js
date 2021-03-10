import  {Cascader}  from 'antd';
import './style.css'
// import 'antd/lib/cascader/style/index'

// import 'antd/dist/antd.css'
const options = [
  {
    value: '浙江',
    label: '浙江',
    children: [
      {
        value: '杭州',
        label: '杭州',
        children: [
          {
            value: '西湖',
            label: '西湖',
          },
        ],
      },
    ],
  },
  {
    value: '江苏',
    label: '江苏',
    children: [
      {
        value: '南京',
        label: '南京',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

function onChange(value) {
  console.log(value);
}

// Just show the latest item.
function displayRender(label) {
  return label[label.length - 1];
}
export default function CascaderWrapper(){
    return(
        <Cascader 
            options={options} 
            expandTrigger="hover"
            displayRender={displayRender}
            onChange={onChange}/>
    )
}
// ReactDOM.render(
//   <Cascader
//     options={options}
//     expandTrigger="hover"
//     displayRender={displayRender}
//     onChange={onChange}
//   />,
//   mountNode,
// );