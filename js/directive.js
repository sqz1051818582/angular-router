App.directive('direcTitle',direcTitle);
App.directive('direcBox',direcBox);

function direcTitle($rootScope,$timeout){
	return {
		link:function(scope,ele){
			//console.log(scope)
			//console.log(ele)			
			 func = function(event,toState){
				//console.log(event)
				//console.log(toState) //状态
				var title='App';
				/*if (toState.data && toState.data.title) {
					ele.text(title+" "+toState.data.title)
				}*/
				if (toState.data && toState.data.title) {
					title+=" "+toState.data.title
				}
				$timeout(function(){
					ele.text(title)
				})
			}
			//写在link里面  当模板开始解析之前触发
			$rootScope.$on('$stateChangeStart',func)
		}
	}	
}

function direcBox(){
	return{
		link:function(scope,ele){
			//console.log(ele)
			ele.find('a').on('click',function(){
				$(this).addClass('bg').siblings().removeClass('bg')
			})
		}
	}
}