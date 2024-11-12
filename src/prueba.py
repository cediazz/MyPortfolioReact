def removeDuplicates(nums:[int]) -> int:
        k = 2  # Start from the third position
        for i in range(2, len(nums)):
            print(nums)
            if nums[i] != nums[k - 2]:
                nums[k] = nums[i]
                k += 1
                  
                  
                  
        print(nums)
        


removeDuplicates([1,1,1,2,2,3])