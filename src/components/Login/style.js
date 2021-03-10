import styled from 'styled-components';
export const LoginRoot=styled.div`
	min-width:800px;
	height:580px;
	background-color: lightblue;
	
	.leftImg{
		margin-left:50px;
		width:400px;
		height:400px;
		float：left;
		overflow:hidden;
		img{
			min-width:50%;
			min-height:50%;
			
		}
	}
`
export const LoginWrapper = styled.div`
	padding:20px;
	width:300px;
	height:300px;
	position:absolute;
	top:20px;
	right:200px;
	text-align:center;
	background:white;
	
	border-radius:5px;
	margin:50px 10px;
	form.login{
		margin:30px 10px;
		min-width:100%;
		height:240px;
		display:flex;
		justify-content:center;
		align-items:flex-start;
		flex-wrap:wrap;
	}
	
`;
export const LoginTitle=styled.h1`
	margin:20px 10px 0 10px ;

`
export const LoginBox = styled.div`
	position:relative;
	width:100%;
	height:2px;
	margin:10px;
	padding:10px;
	label{
		width:56px;
		float:left;
		line-height:30px;
	}

	.show{
		position:absolute;
		right:40px;
        top:20px;
		// bottom:60px;
	}
	input, select,textarea{
        width:65%;
        height:30px;
        border-radius: 5px;
        border-width: .5px;
        border-style: solid;
        border-color: rgb(214, 214, 214);
        box-shadow: 0 1px 1px rgb(233, 233, 233);
    }
    textarea{
        height:50px;
    }
    input:focus, select:focus,textarea:focus{
        border-color:  rgb(235, 234, 234);
        outline: 0;
        -webkit-box-shadow: inset 0 .5px 1px rgba(0,0,0,.075),0 0 2px rgb(187, 186, 186);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px  rgb(187, 186, 186);
    }
	
`;


// export const Button = styled.div`
// 	width: 220px;
// 	height: 30px;
// 	line-height: 30px;
// 	color: #fff;
// 	background: #3194d0;
// 	border-radius: 15px;
// 	margin: 10px auto;
// 	cursor:pointer;
// 	text-align: center;
// `;
//---------------------------------------
//register start
export const RegisterWrapper=styled.div`
	margin:20px auto;
	display:flex;
	justify-content:center;
	align-items:center;
	form{
		min-width:80%;
		display:flex;
		justify-content:center;
		align-items:center;
		flex-wrap:wrap;
	}
	
	.tips{
		display:none;
	}

`
export const RegisterTitle=styled.div`
	font-size:18px;
	font-weight:bold;
	text-align:left;
`;
export const RegisterNew=styled.div`
	width:100%;
    height:30px;
    padding:10px;
    margin-top:10px;
    overflow: hidden;
    color:rgb(116, 115, 115);
    font-size:14px;
	margin-left:400px;
	label{
        float: left;
        width:100px;
        line-height: 30px;
        font-size:15px;
        color:rgb(116, 115, 115);
    }
    .hidden{
        display: none;
    }
    .inputRadio{
        width:14px;
        height:14px;
     
        
    }
	
    &.detail{
        height:50px;
    }
    input, select,textarea{
        width:35%;
        height:30px;
        border-radius: 5px;
        border-width: .5px;
        border-style: solid;
        border-color: rgb(214, 214, 214);
        box-shadow: 0 1px 1px rgb(233, 233, 233);
    }
    textarea{
        height:50px;
    }
    input:focus, select:focus,textarea:focus{
        border-color:  rgb(235, 234, 234);
        outline: 0;
        -webkit-box-shadow: inset 0 .5px 1px rgba(0,0,0,.075),0 0 2px rgb(187, 186, 186);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px  rgb(187, 186, 186);
    }
`