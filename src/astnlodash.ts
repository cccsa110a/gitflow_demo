export function drop(list:any[], n:number):any[] {
  for (let i=0; i<n; i+=1) {
    list.shift()
  }
  return list
}

