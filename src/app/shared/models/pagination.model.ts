export class PaginationModel {
  itemsPerPageArr = [10, 20, 50, 100];
  itemsPerPage = 20;
  totalItems!: number;

  currentPage!: number;
  totalPages!: number;
}
