function createCartApi(http) {
  return {
    async add(token, id) {
      return (await http.get(`cart/add.php?token=${token}&id=${id}`)).data;
    },
    async change(token, id, cnt) {
      return (
        await http.get(`cart/change.php?token=${token}&id=${id}&cnt=${cnt}`)
      ).data;
    },
    async remove(token, id) {
      return (await http.get(`cart/remove.php?token=${token}&id=${id}`)).data;
    },
    async load(curToken) {
      return (await http.get(`cart/load.php?token=${curToken}`)).data;
    },
  };
}
export default createCartApi;
