import java.util.*;
import java.lang.*;
import java.io.*;

class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		
		Scanner sc=new Scanner(System.in);
		
		int size=sc.nextInt();
		
		
		
		for(int i=0; i<size; i++){
		    
		    int p_1=sc.nextInt();
		    int P_2=sc.nextInt();
		    int P_3=sc.nextInt();
		    
		    
		   
		    
		    
		    System.out.println(game(p_1 , P_2, P_3));
		    
		    
		    
		    
		}

	}
	
	public static int game(int P_1, int P_2, int P_3){
    int[] arr = new int[3];
    arr[0] = P_1;
    arr[1] = P_2;
    arr[2] = P_3;
    
    Arrays.sort(arr);
    
    
    if(arr[0] == arr[1] || arr[1] == arr[2]){
        return 0;
    }
    
   
    int gap1 = arr[1] - arr[0];
    int gap2 = arr[2] - arr[1];
    
    return Math.min(gap1, gap2);
}
}
