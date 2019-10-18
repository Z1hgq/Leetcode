function MergrArray(a, first, mid, last, temp){
    let i = first, j = mid + 1;
    let m = mid, n = last;
    let k = 0;
    while(i <= m && j <= n){
        if (a[i] <= a[j]){
			temp[k++] = a[i++];
        }
		else{
			temp[k++] = a[j++];
        }
    } 
    while (i <= m){
		temp[k++] = a[i++];
    }
	while (j <= n){
		temp[k++] = a[j++];
    }
	for (i = 0; i < k; i++){
		a[first + i] = temp[i];
    }
}

function MergeSort(a, first, last, temp){
    if(first < last){
        let mid = (first + last) / 2;
        MergeSort(a, first, mid, temp);//左边有序
        MergeSort(a, mid + 1, last, temp);//右边有序
        MergrArray(a, first, mid, last, temp);
    }
}

function Sort(a, n){
    let p = [];
    if(n == 0){
        return false;
    }
    MergeSort(a, 0, n - 1, p);
    console.log(p);
    return true;
}

let a = [1,3,4,2,4,5,6,2,5,6,7,82,4,6,7,423,54,131,43,67,234,657,24,1,3,567];
Sort(a, 26)