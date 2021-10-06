// var array = [1];
// var other = _.concat(array, 2, [3], [[4]]);
// other equalTo([1, 2, 3, [4]])
export function concat(...args: any[]) {
  var clist:any[] = []
  for (let i=0; i<args.length; i++) {
    clist = clist.concat(args[i])
  }
  return clist
}
