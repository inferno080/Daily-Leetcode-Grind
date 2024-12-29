// Time: O(s.length())    Space: O(1)	
void decode(String s, Node root) {
       Node curr = root;
       for(int i = 0;  i<s.length(); i++){
            if(s.charAt(i) == '1'){
                curr = curr.right;
            } else {
                curr = curr.left;
            } 
            if(curr.left == null && curr.right == null) {
                System.out.print(curr.data);
                curr = root;
            }
       }
    }
