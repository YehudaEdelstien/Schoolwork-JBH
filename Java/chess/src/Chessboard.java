public class Chessboard {
    private ChessPiece[][] board;

    public Chessboard() {
        board = new ChessPiece[8][8];
        setUp();
    }

    public void setUp() {
        setUpRooks();
    }

    private void setUpRooks() {
        board[0][0] = new Rook(new Position(0, 0), 'w');
        board[0][0] = new Rook(new Position(0, 7), 'w');
        board[0][0] = new Rook(new Position(7, 0), 'b');
        board[0][0] = new Rook(new Position(7, 7), 'b');
    }
}
