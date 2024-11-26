// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('pageInfo').title('PageInfo'),
      S.documentTypeListItem('project').title('Project'),
      S.documentTypeListItem('skill').title('Skill'),
      S.documentTypeListItem('social').title('Social'),
      S.documentTypeListItem('experience').title('Experience'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['pageInfo','project','skill','social','experience'].includes(item.getId()),
      ),
    ])
